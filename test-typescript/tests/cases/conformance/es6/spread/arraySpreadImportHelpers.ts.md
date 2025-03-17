__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 21,
            "end": 29,
            "elements": [
              {
                "type": "Literal",
                "start": 22,
                "end": 23,
                "value": 1,
                "raw": "1"
              },
              null,
              {
                "type": "Literal",
                "start": 27,
                "end": 28,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 41,
            "end": 53,
            "elements": [
              {
                "type": "Literal",
                "start": 42,
                "end": 43,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "SpreadElement",
                "start": 45,
                "end": 49,
                "argument": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "name": "k",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Literal",
                "start": 51,
                "end": 52,
                "value": 4,
                "raw": "4"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 82,
  "end": 168,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 82,
      "end": 167,
      "id": {
        "type": "Literal",
        "start": 97,
        "end": 104,
        "value": "tslib",
        "raw": "\"tslib\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 105,
        "end": 167,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 111,
            "end": 165,
            "id": {
              "type": "Identifier",
              "start": 120,
              "end": 133,
              "name": "__spreadArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 134,
                "end": 143,
                "name": "to",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 136,
                  "end": 143,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 138,
                    "end": 143,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 138,
                      "end": 141
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 145,
                "end": 156,
                "name": "from",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 149,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 151,
                    "end": 156,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 151,
                      "end": 154
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 164,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 159,
                "end": 164,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 159,
                  "end": 162
                }
              }
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

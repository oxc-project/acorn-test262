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
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "1",
                "value": 1
              },
              null,
              {
                "type": "Literal",
                "start": 27,
                "end": 28,
                "raw": "2",
                "value": 2
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "3",
                "value": 3
              },
              {
                "type": "SpreadElement",
                "start": 45,
                "end": 49,
                "argument": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Literal",
                "start": 51,
                "end": 52,
                "raw": "4",
                "value": 4
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
  "end": 167,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 82,
      "end": 167,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 105,
        "end": 167,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 111,
            "end": 165,
            "async": false,
            "body": null,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 120,
              "end": 133,
              "decorators": [],
              "name": "__spreadArray",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 134,
                "end": 143,
                "decorators": [],
                "name": "to",
                "optional": false,
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
                }
              },
              {
                "type": "Identifier",
                "start": 145,
                "end": 156,
                "decorators": [],
                "name": "from",
                "optional": false,
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
                }
              }
            ],
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
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 97,
        "end": 104,
        "raw": "\"tslib\"",
        "value": "tslib"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

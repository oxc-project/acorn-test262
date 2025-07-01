__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 18
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 22,
                "end": 23
              },
              null,
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 27,
                "end": 28
              }
            ],
            "start": 21,
            "end": 29
          },
          "definite": false,
          "start": 17,
          "end": 29
        }
      ],
      "declare": false,
      "start": 11,
      "end": 30
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 42,
                "end": 43
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "start": 45,
                "end": 49
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 51,
                "end": 52
              }
            ],
            "start": 41,
            "end": 53
          },
          "definite": false,
          "start": 37,
          "end": 53
        }
      ],
      "declare": false,
      "start": 31,
      "end": 54
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 55
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "tslib",
        "raw": "\"tslib\"",
        "start": 97,
        "end": 104
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "__spreadArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 133
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "to",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 138,
                      "end": 141
                    },
                    "start": 138,
                    "end": 143
                  },
                  "start": 136,
                  "end": 143
                },
                "start": 134,
                "end": 143
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 151,
                      "end": 154
                    },
                    "start": 151,
                    "end": 156
                  },
                  "start": 149,
                  "end": 156
                },
                "start": 145,
                "end": 156
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 159,
                  "end": 162
                },
                "start": 159,
                "end": 164
              },
              "start": 157,
              "end": 164
            },
            "body": null,
            "expression": false,
            "start": 111,
            "end": 165
          }
        ],
        "start": 105,
        "end": 167
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 82,
      "end": 167
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 82,
  "end": 167
}
```

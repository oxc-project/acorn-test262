__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 96,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 96,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 51,
          "end": 96,
          "body": [
            {
              "type": "ThrowStatement",
              "start": 57,
              "end": 94,
              "argument": {
                "type": "NewExpression",
                "start": 63,
                "end": 93,
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "start": 73,
                    "end": 92,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 73,
                      "end": 86,
                      "raw": "\"Unexpected \"",
                      "value": "Unexpected "
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 92,
                      "decorators": [],
                      "name": "msg",
                      "optional": false
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 72,
                  "decorators": [],
                  "name": "Error",
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 27,
          "decorators": [],
          "name": "assertNever",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 28,
            "end": 36,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 31,
                "end": 36
              }
            }
          },
          {
            "type": "Identifier",
            "start": 38,
            "end": 49,
            "decorators": [],
            "name": "msg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 33,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "assertNevar",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "assertNevar",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 96,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 27,
          "name": "assertNever",
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
            "start": 28,
            "end": 36,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 31,
                "end": 36
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 38,
            "end": 49,
            "name": "msg",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                "callee": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 72,
                  "name": "Error",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "start": 73,
                    "end": 92,
                    "left": {
                      "type": "Literal",
                      "start": 73,
                      "end": 86,
                      "value": "Unexpected ",
                      "raw": "\"Unexpected \""
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 92,
                      "name": "msg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "name": "assertNevar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "name": "assertNevar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 33,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

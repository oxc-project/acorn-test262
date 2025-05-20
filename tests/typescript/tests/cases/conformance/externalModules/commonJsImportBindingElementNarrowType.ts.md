__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 64,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 63,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 63,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 46,
            "end": 62,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 62,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 47,
                "end": 62,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 49,
                  "end": 62,
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 49,
                      "end": 55
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 58,
                      "end": 62
                    }
                  ]
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
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
  "end": 59,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 30,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 11,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 9,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 30,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 29,
                "raw": "\"./foo\"",
                "value": "./foo"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 32,
      "end": 59,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 39,
        "end": 59,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 43,
            "end": 57,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 47,
                "end": 56,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 51,
                  "end": 56,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 55,
                    "end": 56,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "test": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

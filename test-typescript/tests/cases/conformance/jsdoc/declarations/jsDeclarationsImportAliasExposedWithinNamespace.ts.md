__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 69,
  "end": 386,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 82,
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 85,
            "end": 111,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 369,
      "end": 386,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 377,
          "end": 384,
          "exported": {
            "type": "Identifier",
            "start": 377,
            "end": 384,
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 377,
            "end": 384,
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 517,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 33,
        "raw": "'./file.js'",
        "value": "./file.js",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 126,
            "decorators": [],
            "name": "testFnTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 129,
            "end": 155,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 357,
      "end": 486,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 380,
        "end": 486,
        "body": [
          {
            "type": "IfStatement",
            "start": 386,
            "end": 484,
            "alternate": {
              "type": "BlockStatement",
              "start": 456,
              "end": 484,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 466,
                  "end": 478,
                  "argument": {
                    "type": "Literal",
                    "start": 473,
                    "end": 477,
                    "raw": "null",
                    "value": null,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 417,
              "end": 450,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 427,
                  "end": 444,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 434,
                    "end": 443,
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "start": 434,
                      "end": 435,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 438,
                      "end": 443,
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 390,
              "end": 415,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 390,
                "end": 402,
                "argument": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 402,
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 407,
                "end": 415,
                "raw": "'number'",
                "value": "number",
                "regex": null,
                "bigint": null
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
        "start": 366,
        "end": 372,
        "decorators": [],
        "name": "testFn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 373,
          "end": 378,
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 488,
      "end": 517,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 496,
          "end": 502,
          "exported": {
            "type": "Identifier",
            "start": 496,
            "end": 502,
            "decorators": [],
            "name": "testFn",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 496,
            "end": 502,
            "decorators": [],
            "name": "testFn",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 504,
          "end": 515,
          "exported": {
            "type": "Identifier",
            "start": 504,
            "end": 515,
            "decorators": [],
            "name": "testFnTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 504,
            "end": 515,
            "decorators": [],
            "name": "testFnTypes",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

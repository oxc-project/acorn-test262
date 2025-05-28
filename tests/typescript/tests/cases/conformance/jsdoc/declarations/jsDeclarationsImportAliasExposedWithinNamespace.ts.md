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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 111,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 369,
      "end": 386,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 377,
          "end": 384,
          "local": {
            "type": "Identifier",
            "start": 377,
            "end": 384,
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 377,
            "end": 384,
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 33,
        "value": "./file.js",
        "raw": "'./file.js'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 156,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 155,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 357,
      "end": 486,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 372,
        "decorators": [],
        "name": "testFn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 380,
        "end": 486,
        "body": [
          {
            "type": "IfStatement",
            "start": 386,
            "end": 484,
            "test": {
              "type": "BinaryExpression",
              "start": 390,
              "end": 415,
              "left": {
                "type": "UnaryExpression",
                "start": 390,
                "end": 402,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 402,
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 407,
                "end": 415,
                "value": "number",
                "raw": "'number'"
              }
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
                    "left": {
                      "type": "Literal",
                      "start": 434,
                      "end": 435,
                      "value": 2,
                      "raw": "2"
                    },
                    "operator": "*",
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
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 488,
      "end": 517,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 496,
          "end": 502,
          "local": {
            "type": "Identifier",
            "start": 496,
            "end": 502,
            "decorators": [],
            "name": "testFn",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 496,
            "end": 502,
            "decorators": [],
            "name": "testFn",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 504,
          "end": 515,
          "local": {
            "type": "Identifier",
            "start": 504,
            "end": 515,
            "decorators": [],
            "name": "testFnTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 504,
            "end": 515,
            "decorators": [],
            "name": "testFnTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

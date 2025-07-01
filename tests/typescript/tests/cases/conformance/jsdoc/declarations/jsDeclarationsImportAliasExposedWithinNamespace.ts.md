__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 82
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 85,
            "end": 111
          },
          "definite": false,
          "start": 75,
          "end": 111
        }
      ],
      "declare": false,
      "start": 69,
      "end": 112
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 384
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 384
          },
          "exportKind": "value",
          "start": 377,
          "end": 384
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 369,
      "end": 386
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 69,
  "end": 386
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "myTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "importKind": "value",
          "start": 8,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file.js",
        "raw": "'./file.js'",
        "start": 22,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
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
            "name": "testFnTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 126
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 129,
            "end": 155
          },
          "definite": false,
          "start": 115,
          "end": 155
        }
      ],
      "declare": false,
      "start": 109,
      "end": 156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 372
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 378
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 402
                },
                "prefix": true,
                "start": 390,
                "end": 402
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 407,
                "end": 415
              },
              "start": 390,
              "end": 415
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 434,
                      "end": 435
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 438,
                      "end": 443
                    },
                    "start": 434,
                    "end": 443
                  },
                  "start": 427,
                  "end": 444
                }
              ],
              "start": 417,
              "end": 450
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 473,
                    "end": 477
                  },
                  "start": 466,
                  "end": 478
                }
              ],
              "start": 456,
              "end": 484
            },
            "start": 386,
            "end": 484
          }
        ],
        "start": 380,
        "end": 486
      },
      "expression": false,
      "start": 357,
      "end": 486
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "testFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 502
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "testFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 502
          },
          "exportKind": "value",
          "start": 496,
          "end": 502
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "testFnTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 515
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "testFnTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 515
          },
          "exportKind": "value",
          "start": 504,
          "end": 515
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 488,
      "end": 517
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 517
}
```

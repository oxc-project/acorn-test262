__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 44,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 44,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 42,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 32,
                "end": 41,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 41,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 41,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 35,
                      "end": 41
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "raw": "\"test\"",
        "value": "test"
      }
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
  "start": 53,
  "end": 123,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 53,
      "end": 91,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 73,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 74,
          "end": 83,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 83,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 77,
              "end": 83
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 84,
        "end": 90,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 86,
          "end": 90
        }
      },
      "typeParameters": null
    },
    {
      "type": "ImportDeclaration",
      "start": 92,
      "end": 115,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 108,
        "end": 114,
        "raw": "\"test\"",
        "value": "test"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 100,
          "end": 101,
          "imported": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 123,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 122,
        "arguments": [
          {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 116,
          "end": 119,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

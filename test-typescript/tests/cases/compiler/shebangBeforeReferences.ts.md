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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "value": "test",
        "raw": "\"test\""
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 41,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 41,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 35,
                      "end": 41
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 73,
        "name": "use",
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
          "start": 74,
          "end": 83,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 83,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 77,
              "end": 83
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 84,
        "end": 90,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 86,
          "end": 90
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 92,
      "end": 115,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 100,
          "end": 101,
          "imported": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 108,
        "end": 114,
        "value": "test",
        "raw": "\"test\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 123,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 122,
        "callee": {
          "type": "Identifier",
          "start": 116,
          "end": 119,
          "name": "use",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

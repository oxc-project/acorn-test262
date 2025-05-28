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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 32,
                "end": 41,
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
                "init": null,
                "definite": false
              }
            ],
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
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
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
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

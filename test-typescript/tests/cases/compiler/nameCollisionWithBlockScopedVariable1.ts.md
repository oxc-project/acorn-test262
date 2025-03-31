__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 35,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 33,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 33,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 33,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 36,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 96,
        "body": [
          {
            "type": "BlockStatement",
            "start": 51,
            "end": 94,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 61,
                "end": 71,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 65,
                    "end": 70,
                    "id": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 69,
                      "end": 70,
                      "value": 0,
                      "raw": "0"
                    },
                    "definite": false
                  }
                ],
                "kind": "let",
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 80,
                "end": 88,
                "expression": {
                  "type": "NewExpression",
                  "start": 80,
                  "end": 87,
                  "callee": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 85,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 78,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 15,
            "end": 30,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 23,
              "end": 30,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 35,
            "end": 76,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 42,
              "end": 76,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 46,
                  "end": 75,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 46,
                    "end": 55,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 47,
                        "end": 48,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 53,
                        "end": 54,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "start": 58,
                    "end": 75,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 59,
                        "end": 61,
                        "value": 10,
                        "raw": "10"
                      },
                      {
                        "type": "NewExpression",
                        "start": 63,
                        "end": 70,
                        "callee": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 68,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      },
                      {
                        "type": "Literal",
                        "start": 72,
                        "end": 74,
                        "value": 30,
                        "raw": "30"
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

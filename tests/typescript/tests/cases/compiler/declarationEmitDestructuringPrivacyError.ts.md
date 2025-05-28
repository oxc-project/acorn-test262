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
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 23,
              "end": 30,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 35,
            "end": 76,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 42,
              "end": 76,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 46,
                  "end": 75,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 46,
                    "end": 55,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 47,
                        "end": 48,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 53,
                        "end": 54,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
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
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
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
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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

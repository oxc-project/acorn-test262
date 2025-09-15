__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 26,
              "end": 33
            },
            "abstract": false,
            "declare": false,
            "start": 18,
            "end": 33
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 50,
                        "end": 51
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 53,
                        "end": 54
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 56,
                        "end": 57
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 49,
                    "end": 58
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 62,
                        "end": 64
                      },
                      {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 70,
                          "end": 71
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 66,
                        "end": 73
                      },
                      {
                        "type": "Literal",
                        "value": 30,
                        "raw": "30",
                        "start": 75,
                        "end": 77
                      }
                    ],
                    "start": 61,
                    "end": 78
                  },
                  "definite": false,
                  "start": 49,
                  "end": 78
                }
              ],
              "declare": false,
              "start": 45,
              "end": 79
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 38,
            "end": 79
          }
        ],
        "start": 12,
        "end": 81
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 81
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 81
}
```

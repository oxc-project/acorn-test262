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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 102
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
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Hello",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 138,
                    "end": 143
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 147,
                        "end": 153
                      },
                      "start": 145,
                      "end": 153
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "from private B",
                            "raw": "\"from private B\"",
                            "start": 183,
                            "end": 199
                          },
                          "start": 176,
                          "end": 200
                        }
                      ],
                      "start": 162,
                      "end": 210
                    },
                    "expression": false,
                    "start": 143,
                    "end": 210
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 131,
                  "end": 210
                }
              ],
              "start": 121,
              "end": 216
            },
            "abstract": false,
            "declare": false,
            "start": 109,
            "end": 216
          }
        ],
        "start": 103,
        "end": 218
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 94,
      "end": 218
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 227,
        "end": 228
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 249
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Hello",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 276
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 280,
                          "end": 286
                        },
                        "start": 278,
                        "end": 286
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "from export B",
                              "raw": "\"from export B\"",
                              "start": 316,
                              "end": 331
                            },
                            "start": 309,
                            "end": 332
                          }
                        ],
                        "start": 295,
                        "end": 342
                      },
                      "expression": false,
                      "start": 276,
                      "end": 342
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 264,
                    "end": 342
                  }
                ],
                "start": 254,
                "end": 348
              },
              "abstract": false,
              "declare": false,
              "start": 242,
              "end": 348
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 235,
            "end": 348
          }
        ],
        "start": 229,
        "end": 350
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 220,
      "end": 350
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 94,
  "end": 350
}
```

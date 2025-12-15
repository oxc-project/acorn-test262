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
        "start": 104,
        "end": 105
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
              "start": 118,
              "end": 119
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
                    "start": 141,
                    "end": 146
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
                        "start": 150,
                        "end": 156
                      },
                      "start": 148,
                      "end": 156
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
                            "start": 186,
                            "end": 202
                          },
                          "start": 179,
                          "end": 203
                        }
                      ],
                      "start": 165,
                      "end": 213
                    },
                    "expression": false,
                    "start": 146,
                    "end": 213
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 134,
                  "end": 213
                }
              ],
              "start": 124,
              "end": 219
            },
            "abstract": false,
            "declare": false,
            "start": 112,
            "end": 219
          }
        ],
        "start": 106,
        "end": 221
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 94,
      "end": 221
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 234
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
                "start": 254,
                "end": 255
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
                      "start": 277,
                      "end": 282
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
                          "start": 286,
                          "end": 292
                        },
                        "start": 284,
                        "end": 292
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
                              "start": 322,
                              "end": 337
                            },
                            "start": 315,
                            "end": 338
                          }
                        ],
                        "start": 301,
                        "end": 348
                      },
                      "expression": false,
                      "start": 282,
                      "end": 348
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 270,
                    "end": 348
                  }
                ],
                "start": 260,
                "end": 354
              },
              "abstract": false,
              "declare": false,
              "start": 248,
              "end": 354
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 241,
            "end": 354
          }
        ],
        "start": 235,
        "end": 356
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 223,
      "end": 356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 94,
  "end": 356
}
```

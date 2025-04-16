__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 94,
  "end": 350,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 94,
      "end": 218,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 103,
        "end": 218,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 109,
            "end": 216,
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 121,
              "end": 216,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 131,
                  "end": 210,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 143,
                    "name": "Hello",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 143,
                    "end": 210,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 162,
                      "end": 210,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 176,
                          "end": 200,
                          "argument": {
                            "type": "Literal",
                            "start": 183,
                            "end": 199,
                            "value": "from private B",
                            "raw": "\"from private B\""
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 153,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 147,
                        "end": 153
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 220,
      "end": 350,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 228,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 229,
        "end": 350,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 235,
            "end": 348,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 242,
              "end": 348,
              "id": {
                "type": "Identifier",
                "start": 248,
                "end": 249,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 254,
                "end": 348,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 264,
                    "end": 342,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 276,
                      "name": "Hello",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 276,
                      "end": 342,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 295,
                        "end": 342,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 309,
                            "end": 332,
                            "argument": {
                              "type": "Literal",
                              "start": 316,
                              "end": 331,
                              "value": "from export B",
                              "raw": "\"from export B\""
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 278,
                        "end": 286,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 280,
                          "end": 286
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

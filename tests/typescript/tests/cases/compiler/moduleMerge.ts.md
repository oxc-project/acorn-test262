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
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 121,
              "end": 216,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 131,
                  "end": 210,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 143,
                    "decorators": [],
                    "name": "Hello",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 143,
                    "end": 210,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 153,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 147,
                        "end": 153
                      }
                    },
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
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "abstract": false,
            "declare": false
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
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 248,
                "end": 249,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 254,
                "end": 348,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 264,
                    "end": 342,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 276,
                      "decorators": [],
                      "name": "Hello",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 276,
                      "end": 342,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 278,
                        "end": 286,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 280,
                          "end": 286
                        }
                      },
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
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
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

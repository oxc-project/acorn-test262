__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 167,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 167,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 15,
            "end": 87,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "S",
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
              "end": 87,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 33,
                  "end": 81,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 42,
                    "decorators": [],
                    "name": "decorator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 42,
                    "end": 81,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 43,
                        "end": 57,
                        "decorators": [],
                        "name": "target",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 49,
                          "end": 57,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 51,
                            "end": 57,
                            "typeName": {
                              "type": "Identifier",
                              "start": 51,
                              "end": 57,
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 59,
                        "end": 70,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 62,
                          "end": 70,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 64,
                            "end": 70
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 73,
                        "end": 77
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 78,
                      "end": 81,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 92,
            "end": 165,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 110,
              "end": 165,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 120,
                  "end": 159,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 120,
                      "end": 138,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 122,
                        "end": 137,
                        "object": {
                          "type": "Super",
                          "start": 122,
                          "end": 127
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 137,
                          "decorators": [],
                          "name": "decorator",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 153,
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 153,
                    "end": 159,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 156,
                      "end": 159,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

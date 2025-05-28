__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 61,
  "end": 75,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 74,
      "expression": {
        "type": "Literal",
        "start": 61,
        "end": 73,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
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
  "start": 61,
  "end": 242,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 74,
      "expression": {
        "type": "Literal",
        "start": 61,
        "end": 73,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 75,
      "end": 241,
      "id": {
        "type": "TSQualifiedName",
        "start": 82,
        "end": 110,
        "left": {
          "type": "TSQualifiedName",
          "start": 82,
          "end": 104,
          "left": {
            "type": "Identifier",
            "start": 82,
            "end": 91,
            "decorators": [],
            "name": "Microsoft",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 92,
            "end": 104,
            "decorators": [],
            "name": "PeopleAtWork",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 105,
          "end": 110,
          "decorators": [],
          "name": "Model",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 111,
        "end": 241,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 117,
            "end": 239,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 124,
              "end": 239,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 130,
                "end": 137,
                "decorators": [],
                "name": "_Person",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 138,
                "end": 239,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 148,
                    "end": 233,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 163,
                      "decorators": [],
                      "name": "populate",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 163,
                      "end": 233,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 164,
                          "end": 172,
                          "decorators": [],
                          "name": "raw",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 167,
                            "end": 172,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 169,
                              "end": 172
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 174,
                        "end": 233,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 188,
                            "end": 223,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 192,
                                "end": 222,
                                "id": {
                                  "type": "Identifier",
                                  "start": 192,
                                  "end": 195,
                                  "decorators": [],
                                  "name": "res",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 198,
                                  "end": 222,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 198,
                                    "end": 203,
                                    "decorators": [],
                                    "name": "Model",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 204,
                                    "end": 222,
                                    "decorators": [],
                                    "name": "KnockoutExtentions",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 122,
  "end": 229,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 145,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 144,
            "decorators": [],
            "name": "OData",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 144,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 141,
                "end": 144
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 146,
      "end": 229,
      "id": {
        "type": "TSQualifiedName",
        "start": 153,
        "end": 181,
        "left": {
          "type": "TSQualifiedName",
          "start": 153,
          "end": 175,
          "left": {
            "type": "Identifier",
            "start": 153,
            "end": 162,
            "decorators": [],
            "name": "Microsoft",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 163,
            "end": 175,
            "decorators": [],
            "name": "PeopleAtWork",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 176,
          "end": 181,
          "decorators": [],
          "name": "Model",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 182,
        "end": 229,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 188,
            "end": 227,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 195,
              "end": 227,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 201,
                "end": 219,
                "decorators": [],
                "name": "KnockoutExtentions",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 220,
                "end": 227,
                "body": []
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
  "sourceType": "module",
  "hashbang": null
}
```

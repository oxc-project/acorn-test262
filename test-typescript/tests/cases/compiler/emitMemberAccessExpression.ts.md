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
            "name": "Microsoft",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 92,
            "end": 104,
            "name": "PeopleAtWork",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 105,
          "end": 110,
          "name": "Model",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 130,
                "end": 137,
                "name": "_Person",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 138,
                "end": 239,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 148,
                    "end": 233,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 163,
                      "name": "populate",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 163,
                      "end": 233,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 164,
                          "end": 172,
                          "name": "raw",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 167,
                            "end": 172,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 169,
                              "end": 172
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 174,
                        "end": 233,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 188,
                            "end": 223,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 192,
                                "end": 222,
                                "id": {
                                  "type": "Identifier",
                                  "start": 192,
                                  "end": 195,
                                  "name": "res",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 198,
                                  "end": 222,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 198,
                                    "end": 203,
                                    "name": "Model",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 204,
                                    "end": 222,
                                    "name": "KnockoutExtentions",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "definite": false
                              }
                            ],
                            "kind": "var",
                            "declare": false
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 144,
            "name": "OData",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 144,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 141,
                "end": 144
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "Microsoft",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 163,
            "end": 175,
            "name": "PeopleAtWork",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 176,
          "end": 181,
          "name": "Model",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 201,
                "end": 219,
                "name": "KnockoutExtentions",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 220,
                "end": 227,
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

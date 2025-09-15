__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 61,
        "end": 73
      },
      "directive": "use strict",
      "start": 61,
      "end": 74
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 61,
  "end": 75
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 61,
        "end": 73
      },
      "directive": "use strict",
      "start": 61,
      "end": 74
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "Microsoft",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 94
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "PeopleAtWork",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 107
          },
          "start": 85,
          "end": 107
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Model",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 113
        },
        "start": 85,
        "end": 113
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
                "name": "_Person",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 140
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
                      "name": "populate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 166
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "raw",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 172,
                              "end": 175
                            },
                            "start": 170,
                            "end": 175
                          },
                          "start": 167,
                          "end": 175
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "res",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 195,
                                  "end": 198
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Model",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 201,
                                    "end": 206
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "KnockoutExtentions",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 207,
                                    "end": 225
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 201,
                                  "end": 225
                                },
                                "definite": false,
                                "start": 195,
                                "end": 225
                              }
                            ],
                            "declare": false,
                            "start": 191,
                            "end": 226
                          }
                        ],
                        "start": 177,
                        "end": 236
                      },
                      "expression": false,
                      "start": 166,
                      "end": 236
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 151,
                    "end": 236
                  }
                ],
                "start": 141,
                "end": 242
              },
              "abstract": false,
              "declare": false,
              "start": 127,
              "end": 242
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 120,
            "end": 242
          }
        ],
        "start": 114,
        "end": 244
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 75,
      "end": 244
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 61,
  "end": 245
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "OData",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 141,
                "end": 144
              },
              "start": 139,
              "end": 144
            },
            "start": 134,
            "end": 144
          },
          "init": null,
          "definite": false,
          "start": 134,
          "end": 144
        }
      ],
      "declare": true,
      "start": 122,
      "end": 145
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "Microsoft",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 165
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "PeopleAtWork",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 178
          },
          "start": 156,
          "end": 178
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Model",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 184
        },
        "start": 156,
        "end": 184
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
                "name": "KnockoutExtentions",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 222
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 223,
                "end": 230
              },
              "abstract": false,
              "declare": false,
              "start": 198,
              "end": 230
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 191,
            "end": 230
          }
        ],
        "start": 185,
        "end": 232
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 146,
      "end": 232
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 122,
  "end": 232
}
```

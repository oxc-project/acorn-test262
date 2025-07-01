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
            "start": 82,
            "end": 91
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "PeopleAtWork",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 104
          },
          "start": 82,
          "end": 104
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Model",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 110
        },
        "start": 82,
        "end": 110
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
                "start": 130,
                "end": 137
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
                      "start": 155,
                      "end": 163
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
                              "start": 169,
                              "end": 172
                            },
                            "start": 167,
                            "end": 172
                          },
                          "start": 164,
                          "end": 172
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
                                  "start": 192,
                                  "end": 195
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Model",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 198,
                                    "end": 203
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "KnockoutExtentions",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 204,
                                    "end": 222
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 198,
                                  "end": 222
                                },
                                "definite": false,
                                "start": 192,
                                "end": 222
                              }
                            ],
                            "declare": false,
                            "start": 188,
                            "end": 223
                          }
                        ],
                        "start": 174,
                        "end": 233
                      },
                      "expression": false,
                      "start": 163,
                      "end": 233
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 148,
                    "end": 233
                  }
                ],
                "start": 138,
                "end": 239
              },
              "abstract": false,
              "declare": false,
              "start": 124,
              "end": 239
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 117,
            "end": 239
          }
        ],
        "start": 111,
        "end": 241
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 75,
      "end": 241
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 61,
  "end": 242
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
            "start": 153,
            "end": 162
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "PeopleAtWork",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 175
          },
          "start": 153,
          "end": 175
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Model",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 181
        },
        "start": 153,
        "end": 181
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
                "start": 201,
                "end": 219
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 220,
                "end": 227
              },
              "abstract": false,
              "declare": false,
              "start": 195,
              "end": 227
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 188,
            "end": 227
          }
        ],
        "start": 182,
        "end": 229
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 146,
      "end": 229
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 122,
  "end": 229
}
```

emitMemberAccessExpression_file1.ts
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
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 61,
        "end": 73,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    }
  ],
  "sourceType": "module"
}
```
emitMemberAccessExpression_file2.ts
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
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 61,
        "end": 73,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 75,
      "end": 241,
      "body": {
        "type": "TSModuleBlock",
        "start": 111,
        "end": 241,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 117,
            "end": 239,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 124,
              "end": 239,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 138,
                "end": 239,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 148,
                    "end": 233,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 163,
                      "decorators": [],
                      "name": "populate",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 163,
                      "end": 233,
                      "async": false,
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
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 192,
                                  "end": 195,
                                  "decorators": [],
                                  "name": "res",
                                  "optional": false
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 198,
                                  "end": 222,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 198,
                                    "end": 203,
                                    "decorators": [],
                                    "name": "Model",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 204,
                                    "end": 222,
                                    "decorators": [],
                                    "name": "KnockoutExtentions",
                                    "optional": false
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
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
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 130,
                "end": 137,
                "decorators": [],
                "name": "_Person",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
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
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 92,
            "end": 104,
            "decorators": [],
            "name": "PeopleAtWork",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 105,
          "end": 110,
          "decorators": [],
          "name": "Model",
          "optional": false
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
emitMemberAccessExpression_file3.ts
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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 146,
      "end": 229,
      "body": {
        "type": "TSModuleBlock",
        "start": 182,
        "end": 229,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 188,
            "end": 227,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 195,
              "end": 227,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 220,
                "end": 227,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 201,
                "end": 219,
                "decorators": [],
                "name": "KnockoutExtentions",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
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
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 163,
            "end": 175,
            "decorators": [],
            "name": "PeopleAtWork",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 176,
          "end": 181,
          "decorators": [],
          "name": "Model",
          "optional": false
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```

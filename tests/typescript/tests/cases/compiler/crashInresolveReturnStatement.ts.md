__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 385,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 108,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 21,
        "decorators": [],
        "name": "WorkItemToolbar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 106,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 53,
              "decorators": [],
              "name": "onToolbarItemClick",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 106,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 106,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 66,
                    "end": 100,
                    "expression": {
                      "type": "CallExpression",
                      "start": 66,
                      "end": 99,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 66,
                        "end": 97,
                        "object": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 76,
                          "decorators": [],
                          "name": "WITDialogs",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 77,
                          "end": 97,
                          "decorators": [],
                          "name": "createCopyOfWorkItem",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
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
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 203,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 141,
        "decorators": [],
        "name": "CreateCopyOfWorkItemDialog",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 148,
            "end": 201,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 170,
              "decorators": [],
              "name": "getDialogResult",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 201,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 173,
                "end": 201,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 183,
                    "end": 195,
                    "argument": {
                      "type": "Literal",
                      "start": 190,
                      "end": 194,
                      "value": null,
                      "raw": "null"
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
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 233,
        "decorators": [],
        "name": "createWorkItemDialog",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 233,
        "end": 237,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 234,
            "end": 236,
            "name": {
              "type": "Identifier",
              "start": 234,
              "end": 236,
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 238,
          "end": 252,
          "decorators": [],
          "name": "dialogType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 252,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 250,
              "end": 252,
              "typeName": {
                "type": "Identifier",
                "start": 250,
                "end": 252,
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 254,
        "end": 257,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 258,
      "end": 385,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 274,
        "decorators": [],
        "name": "WITDialogs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 275,
        "end": 385,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 281,
            "end": 383,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 315,
              "decorators": [],
              "name": "createCopyOfWorkItem",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 315,
              "end": 383,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 318,
                "end": 383,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 328,
                    "end": 377,
                    "expression": {
                      "type": "CallExpression",
                      "start": 328,
                      "end": 376,
                      "callee": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 348,
                        "decorators": [],
                        "name": "createWorkItemDialog",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 349,
                          "end": 375,
                          "decorators": [],
                          "name": "CreateCopyOfWorkItemDialog",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

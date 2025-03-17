__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 386,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 21,
        "name": "WorkItemToolbar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 106,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 53,
              "name": "onToolbarItemClick",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 106,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "WITDialogs",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 77,
                          "end": 97,
                          "name": "createCopyOfWorkItem",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 141,
        "name": "CreateCopyOfWorkItemDialog",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 148,
            "end": 201,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 170,
              "name": "getDialogResult",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 201,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 233,
        "name": "createWorkItemDialog",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 238,
          "end": 252,
          "name": "dialogType",
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
                "name": "P0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 254,
        "end": 257,
        "body": []
      },
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
              "name": "P0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 258,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 274,
        "name": "WITDialogs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 275,
        "end": 385,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 281,
            "end": 383,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 315,
              "name": "createCopyOfWorkItem",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 315,
              "end": 383,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "createWorkItemDialog",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 349,
                          "end": 375,
                          "name": "CreateCopyOfWorkItemDialog",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

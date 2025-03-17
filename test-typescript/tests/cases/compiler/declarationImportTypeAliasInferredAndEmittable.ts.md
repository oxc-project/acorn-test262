__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Conn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 67,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 34,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 34,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 31,
                "end": 34,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 39,
            "end": 48,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 43,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 46,
              "end": 47,
              "value": 3,
              "raw": "3"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 65,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 59,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 59,
              "end": 65,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 65,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
      "type": "TSExportAssignment",
      "start": 69,
      "end": 83,
      "expression": {
        "type": "Identifier",
        "start": 78,
        "end": 82,
        "name": "Conn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
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
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Conn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSImportType",
        "start": 12,
        "end": 27,
        "argument": {
          "type": "TSLiteralType",
          "start": 19,
          "end": 26,
          "literal": {
            "type": "Literal",
            "start": 19,
            "end": 26,
            "value": "./foo",
            "raw": "\"./foo\""
          }
        },
        "options": null,
        "qualifier": null,
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 48,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 44,
                "end": 48,
                "typeName": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 48,
                  "name": "Conn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 157,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 58,
        "end": 157,
        "id": {
          "type": "Identifier",
          "start": 64,
          "end": 68,
          "name": "Wrap",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 69,
          "end": 157,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 75,
              "end": 92,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 75,
                "end": 83,
                "name": "connItem",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 83,
                "end": 91,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 85,
                  "end": 91
                }
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 97,
              "end": 155,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 97,
                "end": 108,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 108,
                "end": 155,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 109,
                    "end": 114,
                    "left": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 116,
                  "end": 155,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 126,
                      "end": 149,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 126,
                        "end": 148,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 126,
                          "end": 139,
                          "object": {
                            "type": "ThisExpression",
                            "start": 126,
                            "end": 130
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 131,
                            "end": 139,
                            "name": "connItem",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 142,
                          "end": 148,
                          "object": {
                            "type": "Identifier",
                            "start": 142,
                            "end": 143,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 148,
                            "name": "item",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
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
              "accessibility": null
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```

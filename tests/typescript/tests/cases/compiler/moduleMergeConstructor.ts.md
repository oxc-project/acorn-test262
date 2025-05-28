__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 100,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "foo",
        "raw": "\"foo\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 100,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 98,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 34,
              "end": 98,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 43,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 44,
                "end": 98,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 54,
                    "end": 68,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 65,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 65,
                      "end": 68,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": null,
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 77,
                    "end": 92,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 84,
                      "decorators": [],
                      "name": "method1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 84,
                      "end": 92,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 86,
                        "end": 91,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 88,
                          "end": 91
                        }
                      },
                      "body": null,
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
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
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "foo",
        "raw": "\"foo\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 81,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 79,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 34,
              "end": 79,
              "id": {
                "type": "Identifier",
                "start": 44,
                "end": 47,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 48,
                "end": 79,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 58,
                    "end": 73,
                    "key": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 65,
                      "decorators": [],
                      "name": "method2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 67,
                      "end": 72,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 69,
                        "end": 72
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
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
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "value": "foo",
        "raw": "\"foo\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 121,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 39,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 121,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 46,
            "end": 59,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 51,
                "end": 58,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 51,
                  "end": 58,
                  "left": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 54,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 58,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 64,
            "end": 119,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 75,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 75,
              "end": 119,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 119,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 88,
                    "end": 113,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 88,
                      "end": 112,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 88,
                        "end": 96,
                        "object": {
                          "type": "ThisExpression",
                          "start": 88,
                          "end": 92
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 96,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "NewExpression",
                        "start": 99,
                        "end": 112,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 103,
                          "end": 110,
                          "object": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 106,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 110,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": []
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```

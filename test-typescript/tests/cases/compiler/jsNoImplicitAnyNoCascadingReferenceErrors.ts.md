__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 44,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 44,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 28,
          "end": 44,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 34,
              "end": 42,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 34,
                "end": 38,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 38,
                "end": 41,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 40,
                  "end": 41,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "value": null
            }
          ]
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 24,
          "end": 27,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 25,
              "end": 26,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
  "end": 132,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 29,
        "raw": "\"./somelib\"",
        "value": "./somelib",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 132,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 132,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 62,
            "end": 130,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 73,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 130,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 130,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 86,
                    "end": 94,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 86,
                      "end": 93,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 86,
                        "end": 91
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 103,
                    "end": 124,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 103,
                      "end": 123,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 103,
                        "end": 118,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 103,
                          "end": 112,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 103,
                            "end": 107
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 112,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 118,
                          "decorators": [],
                          "name": "alpha",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 121,
                        "end": 123,
                        "raw": "12",
                        "value": 12,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 43,
        "decorators": [],
        "name": "MyFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "State",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 34,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 32,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 29,
              "name": "version",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 32,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 31,
                "end": 32,
                "literal": {
                  "type": "Literal",
                  "start": 31,
                  "end": 32,
                  "value": 2,
                  "raw": "2"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 53,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 73,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 71,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 68,
              "name": "state",
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
              "start": 68,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 53,
        "end": 56,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 54,
            "end": 55,
            "name": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "S",
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 90,
        "name": "Assignment",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 99,
        "end": 103,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 192,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 190,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 128,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 128,
              "end": 190,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 131,
                "end": 190,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 141,
                    "end": 148,
                    "expression": {
                      "type": "CallExpression",
                      "start": 141,
                      "end": 148,
                      "callee": {
                        "type": "Super",
                        "start": 141,
                        "end": 146
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 157,
                    "end": 184,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 157,
                      "end": 184,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 157,
                        "end": 167,
                        "object": {
                          "type": "ThisExpression",
                          "start": 157,
                          "end": 161
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 167,
                          "name": "state",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 170,
                        "end": 184,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 172,
                            "end": 182,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 172,
                              "end": 179,
                              "name": "version",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 181,
                              "end": 182,
                              "value": 2,
                              "raw": "2"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
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
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 103,
        "end": 110,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 104,
            "end": 109,
            "typeName": {
              "type": "Identifier",
              "start": 104,
              "end": 109,
              "name": "State",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

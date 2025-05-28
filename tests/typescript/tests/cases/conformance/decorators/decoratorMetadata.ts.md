__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 32,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 32,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 28,
          "decorators": [],
          "name": "Service",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 29,
          "end": 32,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "exportKind": "value"
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
  "end": 188,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "Service",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 31,
        "value": "./service",
        "raw": "\"./service\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 61,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 60,
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 60,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 188,
      "decorators": [
        {
          "type": "Decorator",
          "start": 63,
          "end": 73,
          "expression": {
            "type": "Identifier",
            "start": 64,
            "end": 73,
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 91,
        "decorators": [],
        "name": "MyComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 92,
        "end": 188,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 142,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 109,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 142,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 110,
                  "end": 133,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 133,
                    "decorators": [],
                    "name": "Service",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 124,
                      "end": 133,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 126,
                        "end": 133,
                        "typeName": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 133,
                          "decorators": [],
                          "name": "Service",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 142,
                "body": []
              },
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
            "start": 148,
            "end": 186,
            "decorators": [
              {
                "type": "Decorator",
                "start": 148,
                "end": 158,
                "expression": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 158,
                  "decorators": [],
                  "name": "decorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 169,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 186,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 170,
                  "end": 177,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 171,
                    "end": 177,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 173,
                      "end": 177
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 179,
                "end": 186,
                "body": []
              },
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

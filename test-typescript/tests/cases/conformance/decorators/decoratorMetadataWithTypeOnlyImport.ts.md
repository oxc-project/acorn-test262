__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 24,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 20,
          "name": "Service",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 24,
          "body": []
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 197,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 41,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 21,
            "name": "Service",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 21,
            "name": "Service",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 40,
        "value": "./service",
        "raw": "\"./service\""
      },
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 69,
            "name": "decorator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 69,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 66,
                "end": 69
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
      "type": "ClassDeclaration",
      "start": 72,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 100,
        "name": "MyComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 101,
        "end": 197,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 151,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 118,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 118,
              "end": 151,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 119,
                  "end": 142,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 142,
                    "name": "Service",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 133,
                      "end": 142,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 135,
                        "end": 142,
                        "typeName": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 142,
                          "name": "Service",
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
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 144,
                "end": 151,
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
            "type": "MethodDefinition",
            "start": 157,
            "end": 195,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 178,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 195,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 179,
                  "end": 186,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 180,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 182,
                      "end": 186
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 195,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 157,
                "end": 167,
                "expression": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 167,
                  "name": "decorator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 72,
          "end": 82,
          "expression": {
            "type": "Identifier",
            "start": 73,
            "end": 82,
            "name": "decorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

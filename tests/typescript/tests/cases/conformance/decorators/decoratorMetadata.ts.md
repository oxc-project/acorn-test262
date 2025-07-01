__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Service",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 28
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 29,
          "end": 32
        },
        "abstract": false,
        "declare": false,
        "start": 15,
        "end": 32
      },
      "exportKind": "value",
      "start": 0,
      "end": 32
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 32
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Service",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./service",
        "raw": "\"./service\"",
        "start": 20,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
              },
              "start": 55,
              "end": 60
            },
            "start": 46,
            "end": 60
          },
          "init": null,
          "definite": false,
          "start": 46,
          "end": 60
        }
      ],
      "declare": true,
      "start": 34,
      "end": 61
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 73
          },
          "start": 63,
          "end": 73
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 91
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 109
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Service",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Service",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 133
                        },
                        "typeArguments": null,
                        "start": 126,
                        "end": 133
                      },
                      "start": 124,
                      "end": 133
                    },
                    "start": 117,
                    "end": 133
                  },
                  "readonly": false,
                  "static": false,
                  "start": 110,
                  "end": 133
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 135,
                "end": 142
              },
              "expression": false,
              "start": 109,
              "end": 142
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 98,
            "end": 142
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "decorator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 158
                },
                "start": 148,
                "end": 158
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 169
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 173,
                      "end": 177
                    },
                    "start": 171,
                    "end": 177
                  },
                  "start": 170,
                  "end": 177
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 179,
                "end": 186
              },
              "expression": false,
              "start": 169,
              "end": 186
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 148,
            "end": 186
          }
        ],
        "start": 92,
        "end": 188
      },
      "abstract": false,
      "declare": false,
      "start": 63,
      "end": 188
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 188
}
```

service.ts
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
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 29,
          "end": 32,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 28,
          "decorators": [],
          "name": "Service",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
component.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 31,
        "raw": "\"./service\"",
        "value": "./service"
      },
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 60,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 188,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 92,
        "end": 188,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 142,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 109,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 142,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 142,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 148,
            "end": 186,
            "computed": false,
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
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 169,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 186,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 179,
                "end": 186,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          }
        ]
      },
      "declare": false,
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
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 91,
        "decorators": [],
        "name": "MyComponent",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module"
}
```

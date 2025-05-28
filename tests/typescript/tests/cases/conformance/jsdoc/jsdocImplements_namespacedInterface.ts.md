__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 120,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 26,
            "end": 72,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 38,
              "end": 72,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 48,
                  "end": 66,
                  "key": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 55,
                    "decorators": [],
                    "name": "mNumber",
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
                    "start": 57,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 59,
                      "end": 65
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
          {
            "type": "TSInterfaceDeclaration",
            "start": 77,
            "end": 118,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 89,
              "decorators": [],
              "name": "AT",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 89,
              "end": 92,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 90,
                  "end": 91,
                  "name": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "decorators": [],
                    "name": "T",
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
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 93,
              "end": 118,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 103,
                  "end": 112,
                  "key": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 106,
                    "decorators": [],
                    "name": "gen",
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
                    "start": 108,
                    "end": 111,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 110,
                      "end": 111,
                      "typeName": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 111,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
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
  "start": 23,
  "end": 159,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 74,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 74,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 72,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 44,
              "decorators": [],
              "name": "mNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 72,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 72,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 57,
                    "end": 66,
                    "argument": {
                      "type": "Literal",
                      "start": 64,
                      "end": 65,
                      "value": 0,
                      "raw": "0"
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 159,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 118,
        "decorators": [],
        "name": "BAT",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 119,
        "end": 159,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 125,
            "end": 157,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 128,
              "decorators": [],
              "name": "gen",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 128,
              "end": 157,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 131,
                "end": 157,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 141,
                    "end": 151,
                    "argument": {
                      "type": "Literal",
                      "start": 148,
                      "end": 150,
                      "value": "",
                      "raw": "\"\""
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

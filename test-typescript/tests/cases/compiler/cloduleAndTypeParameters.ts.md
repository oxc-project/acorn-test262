__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 142,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 54,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 54,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 52,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 44,
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
              "start": 44,
              "end": 52,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 52,
                "body": []
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
        "start": 6,
        "end": 9,
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
        "start": 9,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 27,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 20,
              "end": 27,
              "typeArguments": null,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 20,
                "end": 27,
                "left": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 23,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 27,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
    {
      "type": "TSModuleDeclaration",
      "start": 56,
      "end": 142,
      "body": {
        "type": "TSModuleBlock",
        "start": 67,
        "end": 142,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 71,
            "end": 114,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 78,
              "end": 114,
              "body": {
                "type": "TSInterfaceBody",
                "start": 92,
                "end": 114,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 98,
                    "end": 110,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 101,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 109,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 105,
                        "end": 109
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 88,
                "end": 91,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 118,
            "end": 140,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 125,
              "end": 140,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 135,
                "end": 140,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 131,
                "end": 134,
                "decorators": [],
                "name": "Baz",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 66,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

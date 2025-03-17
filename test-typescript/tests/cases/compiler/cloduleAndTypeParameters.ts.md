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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 54,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 52,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 44,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 52,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 52,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 27,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 20,
              "end": 27,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 20,
                "end": 27,
                "left": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 23,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 27,
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 56,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 66,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 67,
        "end": 142,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 71,
            "end": 114,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 78,
              "end": 114,
              "id": {
                "type": "Identifier",
                "start": 88,
                "end": 91,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 92,
                "end": 114,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 98,
                    "end": 110,
                    "key": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 101,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
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
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 118,
            "end": 140,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 125,
              "end": 140,
              "id": {
                "type": "Identifier",
                "start": 131,
                "end": 134,
                "name": "Baz",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 135,
                "end": 140,
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

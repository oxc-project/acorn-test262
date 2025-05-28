__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 66,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 39,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 39,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 31,
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
                "start": 32,
                "end": 39,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 44,
            "end": 64,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 48,
                "end": 63,
                "id": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 51,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 54,
                  "end": 63,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 60,
                    "end": 63,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 67,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 82,
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 82,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 84,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
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
        "start": 86,
        "end": 108,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 92,
            "end": 106,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 97,
              "decorators": [],
              "name": "toFoo",
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
              "start": 99,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 101,
                "end": 106,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 101,
                  "end": 106,
                  "left": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 102,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 106,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```

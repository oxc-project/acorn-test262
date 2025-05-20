__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 166,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 21,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 33,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 109,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 84,
        "end": 109,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 90,
            "end": 107,
            "argument": {
              "type": "MemberExpression",
              "start": 97,
              "end": 106,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 97,
                "end": 102,
                "decorators": [],
                "name": "maker",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 106,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 49,
        "decorators": [],
        "name": "maker",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 51,
          "end": 64,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 56,
            "end": 64,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 58,
              "end": 64
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 65,
        "end": 83,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 67,
          "end": 83,
          "exprName": {
            "type": "TSQualifiedName",
            "start": 74,
            "end": 83,
            "left": {
              "type": "Identifier",
              "start": 74,
              "end": 79,
              "decorators": [],
              "name": "maker",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 111,
      "end": 166,
      "body": {
        "type": "TSModuleBlock",
        "start": 127,
        "end": 166,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 133,
            "end": 164,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 140,
              "end": 164,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 162,
                "end": 164,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 158,
                "end": 161,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
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
        "start": 121,
        "end": 126,
        "decorators": [],
        "name": "maker",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

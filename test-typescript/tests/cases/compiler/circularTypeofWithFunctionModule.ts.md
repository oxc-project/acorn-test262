__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 167,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 21,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 33,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 49,
        "name": "maker",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 51,
          "end": 64,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 56,
            "end": 64,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 58,
              "end": 64
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "object": {
                "type": "Identifier",
                "start": 97,
                "end": 102,
                "name": "maker",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 106,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
              "name": "maker",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 111,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 126,
        "name": "maker",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 127,
        "end": 166,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 133,
            "end": 164,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 140,
              "end": 164,
              "id": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 158,
                "end": 161,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 162,
                "end": 164,
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
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

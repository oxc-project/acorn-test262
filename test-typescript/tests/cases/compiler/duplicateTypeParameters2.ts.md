__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 28,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 26,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 26,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 26,
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
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 57,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 37,
        "end": 57,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 55,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 55,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 55,
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
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 59,
      "end": 99,
      "body": {
        "type": "TSInterfaceBody",
        "start": 97,
        "end": 99,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 70,
        "end": 96,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 82,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 81,
              "end": 82,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 84,
            "end": 95,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 95,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

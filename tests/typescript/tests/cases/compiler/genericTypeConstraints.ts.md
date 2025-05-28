__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 176,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 32,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 32,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 30,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 25,
              "decorators": [],
              "name": "fooMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 30,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 30,
                "body": []
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
      "start": 34,
      "end": 55,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 51,
        "decorators": [],
        "name": "FooExtended",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 55,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 85,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 66,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 66,
        "end": 81,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 67,
            "end": 80,
            "name": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 77,
              "end": 80,
              "typeName": {
                "type": "Identifier",
                "start": 77,
                "end": 80,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 85,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 176,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 104,
        "decorators": [],
        "name": "BarExtended",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 113,
        "end": 116,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 116,
        "end": 129,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 117,
            "end": 128,
            "typeName": {
              "type": "Identifier",
              "start": 117,
              "end": 128,
              "decorators": [],
              "name": "FooExtended",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 130,
        "end": 176,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 136,
            "end": 174,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 147,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 174,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 150,
                "end": 174,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 160,
                    "end": 168,
                    "expression": {
                      "type": "CallExpression",
                      "start": 160,
                      "end": 167,
                      "callee": {
                        "type": "Super",
                        "start": 160,
                        "end": 165
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
  "sourceType": "script",
  "hashbang": null
}
```

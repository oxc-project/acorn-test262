__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 33,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 33,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 31,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 31,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 29,
                "end": 31,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 35,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 57,
          "end": 61,
          "expression": {
            "type": "Identifier",
            "start": 57,
            "end": 61,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 88,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 77,
            "end": 86,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "x",
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
              "start": 80,
              "end": 85,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 82,
                "end": 85
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
      "type": "ClassDeclaration",
      "start": 90,
      "end": 128,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 101,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 101,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 102,
            "end": 103,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 128,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 126,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 126,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 123,
                "end": 126,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 130,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 144,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 144,
        "end": 147,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 145,
            "end": 146,
            "name": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 156,
          "end": 164,
          "expression": {
            "type": "Identifier",
            "start": 156,
            "end": 161,
            "decorators": [],
            "name": "Base2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 161,
            "end": 164,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 162,
                "end": 163,
                "typeName": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 165,
        "end": 191,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 180,
            "end": 189,
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "x",
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
              "start": 183,
              "end": 188,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 185,
                "end": 188
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

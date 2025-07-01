__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 29,
                "end": 36
              },
              "start": 27,
              "end": 36
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 37
          }
        ],
        "start": 14,
        "end": 39
      },
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 54
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "barProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 68
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 70,
                "end": 76
              },
              "start": 68,
              "end": 76
            },
            "accessibility": null,
            "static": false,
            "start": 61,
            "end": 77
          }
        ],
        "start": 55,
        "end": 79
      },
      "declare": false,
      "start": 41,
      "end": 79
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 97
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 109
          },
          "typeArguments": null,
          "start": 106,
          "end": 109
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 114
          },
          "typeArguments": null,
          "start": 111,
          "end": 114
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 115,
        "end": 118
      },
      "declare": false,
      "start": 81,
      "end": 118
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 143
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 145
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 144,
            "end": 145
          }
        ],
        "start": 143,
        "end": 146
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 153
              },
              "typeArguments": null,
              "start": 152,
              "end": 153
            },
            "start": 150,
            "end": 153
          },
          "start": 147,
          "end": 153
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 157
              },
              "typeArguments": null,
              "start": 156,
              "end": 157
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 163
              },
              "typeArguments": null,
              "start": 160,
              "end": 163
            }
          ],
          "start": 156,
          "end": 163
        },
        "start": 154,
        "end": 163
      },
      "body": null,
      "expression": false,
      "start": 120,
      "end": 164
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooBar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FooBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 184
                },
                "typeArguments": null,
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            },
            "start": 170,
            "end": 184
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 193
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fooProp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 200,
                      "end": 207
                    },
                    "value": {
                      "type": "Literal",
                      "value": "frizzlebizzle",
                      "raw": "\"frizzlebizzle\"",
                      "start": 209,
                      "end": 224
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 200,
                    "end": 224
                  }
                ],
                "start": 194,
                "end": 226
              }
            ],
            "optional": false,
            "start": 187,
            "end": 227
          },
          "definite": false,
          "start": 170,
          "end": 227
        }
      ],
      "declare": false,
      "start": 166,
      "end": 228
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 228
}
```

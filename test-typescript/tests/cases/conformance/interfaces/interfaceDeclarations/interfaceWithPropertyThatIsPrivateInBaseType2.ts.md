interfaceWithPropertyThatIsPrivateInBaseType2.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 33,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 31,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 31,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 29,
                "end": 31,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 35,
      "end": 88,
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 88,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 77,
            "end": 86,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
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
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 90,
      "end": 128,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 128,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 126,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 126,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 123,
                "end": 126,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 101,
        "decorators": [],
        "name": "Base2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 101,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 102,
            "end": 103,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 130,
      "end": 191,
      "body": {
        "type": "TSInterfaceBody",
        "start": 165,
        "end": 191,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 180,
            "end": 189,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
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
            "optional": false
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
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 144,
        "decorators": [],
        "name": "Foo2",
        "optional": false
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 174,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 77,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 77,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 23,
              "decorators": [],
              "name": "iObj",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 27,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 24,
                "end": 27,
                "members": []
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 37,
              "decorators": [],
              "name": "iNum",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 59,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 54,
              "decorators": [],
              "name": "iAny",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 58,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 55,
                "end": 58
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 64,
            "end": 75,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "decorators": [],
              "name": "iFn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 74,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 70,
                "end": 74
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
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 79,
      "end": 171,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 171,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 108,
            "end": 124,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 119,
              "decorators": [],
              "name": "iObj",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 120,
                "end": 123,
                "members": []
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 129,
            "end": 148,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 140,
              "decorators": [],
              "name": "iNum",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 147,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 141,
                "end": 147
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 169,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 163,
              "decorators": [],
              "name": "iFn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 163,
              "end": 169,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 166,
                "end": 169,
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
        "start": 85,
        "end": 87,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 99,
          "end": 101,
          "expression": {
            "type": "Identifier",
            "start": 99,
            "end": 101,
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

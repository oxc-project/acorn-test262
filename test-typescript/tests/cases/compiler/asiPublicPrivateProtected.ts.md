__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 487,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 6,
      "expression": {
        "type": "Identifier",
        "start": 0,
        "end": 6,
        "name": "public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 7,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 13,
        "end": 27,
        "name": "NonPublicClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 28,
        "end": 54,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 52,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 52,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 45,
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
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 77,
        "name": "NonPublicClass2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 78,
        "end": 132,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 84,
            "end": 90,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 90,
              "name": "public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 130,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 120,
              "name": "nonPublicFunction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 130,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 123,
                "end": 130,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 133,
      "end": 140,
      "expression": {
        "type": "Identifier",
        "start": 133,
        "end": 140,
        "name": "private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 141,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 162,
        "name": "NonPrivateClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 163,
        "end": 190,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 169,
            "end": 188,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 188,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 188,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 192,
      "end": 270,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 214,
        "name": "NonPrivateClass2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 215,
        "end": 270,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 221,
            "end": 228,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 228,
              "name": "private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 233,
            "end": 268,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 240,
              "end": 258,
              "name": "nonPrivateFunction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 268,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 261,
                "end": 268,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 280,
      "expression": {
        "type": "Identifier",
        "start": 271,
        "end": 280,
        "name": "protected",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 281,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 304,
        "name": "NonProtectedClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 305,
        "end": 330,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 309,
            "end": 328,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 320,
              "end": 328,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 323,
                "end": 328,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 332,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 356,
        "name": "NonProtectedClass2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 357,
        "end": 416,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 363,
            "end": 372,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 363,
              "end": 372,
              "name": "protected",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 377,
            "end": 414,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 384,
              "end": 404,
              "name": "nonProtectedFunction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 404,
              "end": 414,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 407,
                "end": 414,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 418,
      "end": 486,
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 445,
        "name": "ClassWithThreeMembers",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 446,
        "end": 486,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 452,
            "end": 458,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 458,
              "name": "public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 463,
            "end": 470,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 463,
              "end": 470,
              "name": "private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 475,
            "end": 484,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 475,
              "end": 484,
              "name": "protected",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

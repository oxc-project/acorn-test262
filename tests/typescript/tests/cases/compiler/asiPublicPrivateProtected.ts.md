__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 486,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 6,
      "expression": {
        "type": "Identifier",
        "start": 0,
        "end": 6,
        "decorators": [],
        "name": "public",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 7,
      "end": 54,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 13,
        "end": 27,
        "decorators": [],
        "name": "NonPublicClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 28,
        "end": 54,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 52,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 52,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 52,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 132,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 77,
        "decorators": [],
        "name": "NonPublicClass2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 78,
        "end": 132,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 84,
            "end": 90,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 90,
              "decorators": [],
              "name": "public",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 130,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 120,
              "decorators": [],
              "name": "nonPublicFunction",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 130,
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
                "end": 130,
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
      "type": "ExpressionStatement",
      "start": 133,
      "end": 140,
      "expression": {
        "type": "Identifier",
        "start": 133,
        "end": 140,
        "decorators": [],
        "name": "private",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 141,
      "end": 190,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 162,
        "decorators": [],
        "name": "NonPrivateClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 163,
        "end": 190,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 169,
            "end": 188,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 188,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 188,
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
      "type": "ClassDeclaration",
      "start": 192,
      "end": 270,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 214,
        "decorators": [],
        "name": "NonPrivateClass2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 215,
        "end": 270,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 221,
            "end": 228,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 228,
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 233,
            "end": 268,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 240,
              "end": 258,
              "decorators": [],
              "name": "nonPrivateFunction",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 268,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 261,
                "end": 268,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 280,
      "expression": {
        "type": "Identifier",
        "start": 271,
        "end": 280,
        "decorators": [],
        "name": "protected",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 281,
      "end": 330,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 304,
        "decorators": [],
        "name": "NonProtectedClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 305,
        "end": 330,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 309,
            "end": 328,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 320,
              "end": 328,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 323,
                "end": 328,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 332,
      "end": 416,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 356,
        "decorators": [],
        "name": "NonProtectedClass2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 357,
        "end": 416,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 363,
            "end": 372,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 363,
              "end": 372,
              "decorators": [],
              "name": "protected",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 377,
            "end": 414,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 384,
              "end": 404,
              "decorators": [],
              "name": "nonProtectedFunction",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 404,
              "end": 414,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 407,
                "end": 414,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 418,
      "end": 486,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 445,
        "decorators": [],
        "name": "ClassWithThreeMembers",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 446,
        "end": 486,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 452,
            "end": 458,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 458,
              "decorators": [],
              "name": "public",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 463,
            "end": 470,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 463,
              "end": 470,
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 475,
            "end": 484,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 475,
              "end": 484,
              "decorators": [],
              "name": "protected",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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

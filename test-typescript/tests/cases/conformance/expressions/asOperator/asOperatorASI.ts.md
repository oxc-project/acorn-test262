__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 163,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 13,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 13,
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
      "type": "TSDeclareFunction",
      "start": 14,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 33,
        "name": "as",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 34,
          "end": 48,
          "argument": {
            "type": "Identifier",
            "start": 37,
            "end": 41,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 48,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 43,
              "end": 48,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              }
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 73,
            "end": 75,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 93,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 76,
        "end": 92,
        "tag": {
          "type": "Identifier",
          "start": 76,
          "end": 78,
          "name": "as",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 79,
          "end": 92,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 79,
              "end": 92,
              "value": {
                "cooked": "Hello world",
                "raw": "Hello world"
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 138,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 136,
            "end": 138,
            "value": 20,
            "raw": "20"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 147,
      "expression": {
        "type": "CallExpression",
        "start": 139,
        "end": 146,
        "callee": {
          "type": "Identifier",
          "start": 139,
          "end": 141,
          "name": "as",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 142,
            "end": 145,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

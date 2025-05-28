__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 162,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 13,
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
        "end": 13,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 14,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 33,
        "decorators": [],
        "name": "as",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 34,
          "end": 48,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 37,
            "end": 41,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
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
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 75,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
          "decorators": [],
          "name": "as",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 79,
          "end": 92,
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
          ],
          "expressions": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 138,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 138,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
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
          "decorators": [],
          "name": "as",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 142,
            "end": 145,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

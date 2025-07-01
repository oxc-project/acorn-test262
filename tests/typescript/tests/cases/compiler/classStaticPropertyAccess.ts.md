__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "\"",
              "raw": "\"\\\"\"",
              "start": 28,
              "end": 32
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 35,
                "end": 37
              },
              "expression": false,
              "start": 32,
              "end": 37
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 14,
            "end": 37
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 57
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 59,
                "end": 65
              },
              "start": 57,
              "end": 65
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 68,
              "end": 69
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 42,
            "end": 70
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 92,
                "end": 98
              },
              "start": 90,
              "end": 98
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 101,
              "end": 102
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 75,
            "end": 103
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_b",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 136,
              "end": 137
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 108,
            "end": 138
          }
        ],
        "start": 8,
        "end": 140
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 140
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "typeArguments": null,
            "arguments": [],
            "start": 152,
            "end": 159
          },
          "definite": false,
          "start": 148,
          "end": 159
        }
      ],
      "declare": false,
      "start": 142,
      "end": 160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 163
        },
        "property": {
          "type": "Literal",
          "value": "\"",
          "raw": "\"\\\"\"",
          "start": 164,
          "end": 168
        },
        "optional": false,
        "computed": true,
        "start": 162,
        "end": 169
      },
      "directive": null,
      "start": 162,
      "end": 169
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 180
        },
        "property": {
          "type": "Literal",
          "value": "y",
          "raw": "'y'",
          "start": 181,
          "end": 184
        },
        "optional": false,
        "computed": true,
        "start": 179,
        "end": 185
      },
      "directive": null,
      "start": 179,
      "end": 185
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 196,
          "end": 197
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 198,
          "end": 199
        },
        "optional": false,
        "computed": false,
        "start": 196,
        "end": 199
      },
      "directive": null,
      "start": 196,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 214
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "_b",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 217
        },
        "optional": false,
        "computed": false,
        "start": 213,
        "end": 217
      },
      "directive": null,
      "start": 213,
      "end": 217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 231
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 232,
          "end": 233
        },
        "optional": false,
        "computed": false,
        "start": 230,
        "end": 233
      },
      "directive": null,
      "start": 230,
      "end": 233
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 233
}
```

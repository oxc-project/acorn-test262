__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 37,
            "static": true,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 28,
              "end": 32,
              "value": "\"",
              "raw": "\"\\\"\""
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 37,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 37,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 42,
            "end": 70,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 68,
              "end": 69,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 59,
                "end": 65
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 103,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 101,
              "end": 102,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 92,
                "end": 98
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 108,
            "end": 138,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "name": "_b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 136,
              "end": 137,
              "value": 2,
              "raw": "2"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              }
            },
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
      "type": "VariableDeclaration",
      "start": 142,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 152,
            "end": 159,
            "callee": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 169,
      "expression": {
        "type": "MemberExpression",
        "start": 162,
        "end": 169,
        "object": {
          "type": "Identifier",
          "start": 162,
          "end": 163,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 164,
          "end": 168,
          "value": "\"",
          "raw": "\"\\\"\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 185,
      "expression": {
        "type": "MemberExpression",
        "start": 179,
        "end": 185,
        "object": {
          "type": "Identifier",
          "start": 179,
          "end": 180,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 181,
          "end": 184,
          "value": "y",
          "raw": "'y'"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 199,
      "expression": {
        "type": "MemberExpression",
        "start": 196,
        "end": 199,
        "object": {
          "type": "Identifier",
          "start": 196,
          "end": 197,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 198,
          "end": 199,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 217,
      "expression": {
        "type": "MemberExpression",
        "start": 213,
        "end": 217,
        "object": {
          "type": "Identifier",
          "start": 213,
          "end": 214,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 215,
          "end": 217,
          "name": "_b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 230,
      "end": 233,
      "expression": {
        "type": "MemberExpression",
        "start": 230,
        "end": 233,
        "object": {
          "type": "Identifier",
          "start": 230,
          "end": 231,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 232,
          "end": 233,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

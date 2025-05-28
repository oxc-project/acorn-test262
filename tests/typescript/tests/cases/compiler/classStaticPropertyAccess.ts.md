__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 233,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 140,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 37,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 28,
              "end": 32,
              "value": "\"",
              "raw": "\"\\\"\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 37,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 37,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 42,
            "end": 70,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": {
              "type": "Literal",
              "start": 68,
              "end": 69,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 103,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": {
              "type": "Literal",
              "start": 101,
              "end": 102,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 108,
            "end": 138,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "decorators": [],
              "name": "_b",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": {
              "type": "Literal",
              "start": 136,
              "end": 137,
              "value": 2,
              "raw": "2"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 160,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 152,
            "end": 159,
            "callee": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 164,
          "end": 168,
          "value": "\"",
          "raw": "\"\\\"\""
        },
        "optional": false,
        "computed": true
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 181,
          "end": 184,
          "value": "y",
          "raw": "'y'"
        },
        "optional": false,
        "computed": true
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 198,
          "end": 199,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 215,
          "end": 217,
          "decorators": [],
          "name": "_b",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 232,
          "end": 233,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
